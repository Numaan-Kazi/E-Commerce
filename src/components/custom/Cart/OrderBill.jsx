import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideDrawer } from "../SideDrawer";
import { useForm } from "react-hook-form";
import { UserPen } from "lucide-react";
import { toast } from "sonner";
import { sendOrderEmail } from "@/lib/email";

export function OrderBill({ BuyData, totalPrice, totalDiscount, finalAmount }) {
  const todayDate = new Date().toISOString().slice(0, 10);
  const BuyData_Local = JSON.parse(localStorage.getItem("BuyData")) || [];
  const UserDetails = JSON.parse(localStorage.getItem("UserDetails"));
  const [PlaceOrder, setPlaceOrder] = useState(false);
  const navigate = useNavigate();

  console.log(BuyData_Local, "BuyData_Local");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("UserData", data);
    localStorage.setItem("UserDetails", JSON.stringify(data));
    reset();
    setPlaceOrder(false);
    {
      location.pathname == "/Buy-now" && navigate(0);
    }
  };

  async function PlaceOrderHandle() {
    if (UserDetails) {
      toast.success(`${UserDetails.fullName}- Your Order Placed Successfully!`);

      await sendOrderEmail({
        ownerName: "Numaan Kazi",
        customerName: UserDetails.fullName,
        productName:
          BuyData_Local?.length > 1
            ? BuyData_Local.map((item) => item.title).join(", ")
            : BuyData_Local?.[0]?.title,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setPlaceOrder(true);
    }
  }
  return (
    <>
      <div>
        <div className="bg-white border border-gray-300 h-130 overflow-y-auto no-scrollbar">
          {/* ================= PRICE DETAILS HEADER ================= */}
          <div className="px-5 py-3 border-b border-gray-300 text-sm font-semibold text-gray-900">
            PRICE DETAILS
          </div>

          {/* ================= PRICE CONTENT ================= */}
          <div className="px-5 py-4 text-sm space-y-3">
            <div className="flex justify-between">
              <span>Price ({BuyData_Local.length} item)</span>
              <span>₹{Math.round(totalPrice)}</span>
            </div>

            <div className="flex justify-between text-green-700">
              <span>Discount</span>
              <span>-₹{totalDiscount}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">FREE</span>
            </div>

            <div className="border-t border-gray-300 pt-3 flex justify-between font-semibold text-base">
              <span>Total Amount</span>
              <span>₹{Math.round(finalAmount)}</span>
            </div>

            <p className="text-green-700 font-medium text-sm">
              You will save ₹{totalDiscount} on this order
            </p>
          </div>

          {/* ================= ORDER INFO / BARCODE ================= */}
          <div className="border-t border-gray-300 p-4">
            <div className="text-sm font-semibold text-gray-900 mb-4">
              ORDER INFORMATION
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-3">
                {/* Barcode no */}
                <div>
                  <p className="text-xs text-gray-500">Order Barcode</p>
                  <p className="font-mono text-base tracking-widest text-gray-900 leading-11">
                    {BuyData[0]?.meta?.barcode}
                  </p>
                </div>
                {/* dates */}
                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="text-xs text-gray-500">Order Date</p>
                    <p className="text-gray-800">{todayDate}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Last Updated</p>
                    <p className="text-gray-800">
                      {BuyData[0]?.meta?.updatedAt?.split("T")[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* scanner */}
              <div className="flex justify-end">
                <div className="border border-dashed border-gray-300 p-3 rounded-md bg-gray-50">
                  <img
                    src={BuyData[0]?.meta?.qrCode}
                    alt="Order QR Code"
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= PLACE ORDER BUTTON ================= */}
          <div className="p-4">
            <button
              onClick={PlaceOrderHandle}
              disabled={BuyData?.stock === 0}
              className="w-full bg-[#fb641b] hover:bg-[#e95a17] text-white py-3 font-semibold tracking-wide cursor-pointer disabled:cursor-not-allowed disabled:opacity-45"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>

      <SideDrawer
        open={PlaceOrder}
        OpenHandle={setPlaceOrder}
        HandleSubmit={handleSubmit(onSubmit)}
        reset={reset}
        Action={UserDetails ? "Logout" : "Save"}
        Heading={
          <div className="flex items-center gap-2">
            <UserPen />
            <span>Create Your Profile</span>
          </div>
        }
        Description={"Control your personal details and delivery preferences"}
      >
        <form className="grid grid-rows-6 gap-6 p-4">
          {/* ===================== NAME ===================== */}
          <input
            type="text"
            placeholder="Full Name (for delivery)"
            className="outline w-full p-2.5 placeholder:text-sm rounded"
            {...register("fullName", {
              required: "Full name is required",
            })}
          />
          {errors.fullName && (
            <span className="text-sm text-red-600">
              {errors.fullName.message}
            </span>
          )}

          {/* ===================== CONTACT ===================== */}
          <input
            type="tel"
            placeholder="Mobile Number"
            className="outline w-full p-2.5 placeholder:text-sm rounded"
            {...register("mobile", {
              required: "Mobile number is required",
            })}
          />
          {errors.mobile && (
            <span className="text-sm text-red-600">
              {errors.mobile.message}
            </span>
          )}

          {/* ===================== ADDRESS ===================== */}
          <input
            type="text"
            placeholder="Pincode"
            className="outline w-full p-2.5 placeholder:text-sm rounded"
            {...register("pincode", {
              required: "Pincode is required",
            })}
          />
          {errors.pincode && (
            <span className="text-sm text-red-600">
              {errors.pincode.message}
            </span>
          )}

          <input
            type="text"
            placeholder="State"
            className="outline w-full p-2.5 placeholder:text-sm rounded"
            {...register("state", {
              required: "State is required",
            })}
          />
          {errors.state && (
            <span className="text-sm text-red-600">{errors.state.message}</span>
          )}

          <input
            type="text"
            placeholder="City"
            className="outline w-full p-2.5 placeholder:text-sm rounded"
            {...register("city", {
              required: "City is required",
            })}
          />
          {errors.city && (
            <span className="text-sm text-red-600">{errors.city.message}</span>
          )}

          <input
            type="text"
            placeholder="Locality / Area"
            className="outline w-full p-2.5 placeholder:text-sm rounded"
            {...register("locality", {
              required: "Locality is required",
            })}
          />
          {errors.locality && (
            <span className="text-sm text-red-600">
              {errors.locality.message}
            </span>
          )}

          <input
            type="text"
            placeholder="Flat / House No / Building"
            className="outline w-full p-2.5 placeholder:text-sm rounded"
            {...register("addressLine", {
              required: "Address is required",
            })}
          />
          {errors.addressLine && (
            <span className="text-sm text-red-600">
              {errors.addressLine.message}
            </span>
          )}
          {/* ===================== ADDRESS TYPE ===================== */}
          <select
            className="outline w-full p-2.5 text-sm rounded"
            {...register("addressType", {
              required: "Select address type",
            })}
          >
            <option value="">Address Type</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="work">Office</option>
          </select>
          {errors.addressType && (
            <span className="text-sm text-red-600">
              {errors.addressType.message}
            </span>
          )}
        </form>
      </SideDrawer>
    </>
  );
}
