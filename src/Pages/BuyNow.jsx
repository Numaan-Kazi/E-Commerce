import { useState } from "react";
import { OrderInfo } from "@/components/custom/Cart/OrderInfo";
import { OrderBill } from "@/components/custom/Cart/OrderBill";
import { Link, useNavigate } from "react-router-dom";

export function BuyNow() {
  const navigate = useNavigate(0);
  const BuyData = JSON.parse(localStorage.getItem("BuyData") || "[]");
  const UserDetails = JSON.parse(localStorage.getItem("UserDetails"));
  const [qty, setQty] = useState(1);

  //if you are not buy page then remove array from localstorage
  // useEffect(() => {
  //   return () => {
  //     localStorage.removeItem("BuyData");
  //   };
  // }, []);
  const totals = BuyData.reduce(
    (acc, item) => {
      const discount = Math.round(
        Number(item.price) * (Number(item.discountPercentage) / 100),
      );

      const totalPrice = item.price * qty;
      const totalDiscount = discount * qty;

      acc.totalPrice += totalPrice;
      acc.totalDiscount += totalDiscount;
      acc.finalAmount += totalPrice - totalDiscount;
      acc.discount = discount;
      return acc;
    },
    {
      totalPrice: 0,
      totalDiscount: 0,
      finalAmount: 0,
    },
  );

  const CartProduct = (item) => {
    console.log("<<<Cart Product Clicked>>>", item?.title);
    // ===for my understanding===
    // here create a new variable and apply filter method to remove the item from the cart.
    // logic is if the product id is not equal to the item id then keep it in the cart.
    const updatedCart = BuyData.filter((product) => product.id !== item.id);
    localStorage.setItem("BuyData", JSON.stringify(updatedCart));
    navigate(0);
  };

  return (
    <div className="bg-[#f1f3f6]">
      <div className={`mx-auto flex gap-4 justify-center `}>
        <div className={`bg-white border border-gray-300 h-130 `}>
          {UserDetails ? (
            <div className="border-b border-gray-300 p-8">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Deliver to :-
              </p>
              <p className="font-semibold text-gray-900 mt-1">
                {UserDetails?.fullName}
              </p>
              <p className="font-semibold text-gray-900 mt-1">
                {UserDetails?.mobile}
              </p>
              <p className="text-sm text-gray-700 leading-snug mt-1">
                {UserDetails?.addressLine}, {UserDetails?.locality},<br />
                {UserDetails?.city} - {UserDetails?.pincode},{" "}
                {UserDetails?.state}
              </p>
            </div>
          ) : (
            <span className="text-sm text-gray-600 leading-relaxed p-8 block border-b border-gray-300">
              Add your delivery details to help us deliver your orders quickly
              and accurately.
            </span>
          )}

          <div className="overflow-y-auto no-scrollbar h-82.5">
            {BuyData.length > 0 ? (
              BuyData.map((item) => (
                <div key={item.id}>
                  <OrderInfo
                    BuyData={item}
                    discount={totals.discount}
                    qty={qty}
                    setQty={setQty}
                    footer={true}
                    CartProductRemove={CartProduct}
                  />
                </div>
              ))
            ) : (
              <Link
                to="/"
                className="flex gap-2 text-xl font-mono text-center text-blue-500 justify-center items-center py-25"
              >
                No Products Yet
                <span className="text-yellow-600 hover:text-yellow-700">
                  Start shopping now!
                </span>
              </Link>
            )}
          </div>
        </div>
        <div>
          {BuyData.length > 0 && (
            <OrderBill
              BuyData={BuyData}
              qty={qty}
              totalPrice={totals.totalPrice}
              totalDiscount={totals.totalDiscount}
              finalAmount={totals.finalAmount}
            />
          )}
        </div>
      </div>
    </div>
  );
}
