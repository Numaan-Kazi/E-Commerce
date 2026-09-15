catgoryNavbar.jsx old 

// import { CATEGORY_GROUPS, Catogories } from "@/Data/staticData";
// import React from "react";
// import { CatogoriesBtn } from "./Catogories";
// export function CategoryNavbar({ navigate, handleCategoryClick }) {
//   return (
//     <>
//       <div className="grid grid-cols-7 gap-8 bg-white rounded-bl-2xl rounded-tr-2xl py-5">
//         {Catogories.map((item) => {
//           const key = item.id;
//           const menu = CATEGORY_GROUPS[key];
//           return (
//             <div key={item.id} className="relative group">
//               <CatogoriesBtn
//                 title={item.title}
//                 image={item.image}
//                 onClick={() => handleCategoryClick(item)}
//               />
//               {menu && (
//                 <>
//                   <div className="absolute left-0 top-full h-3 w-full" />
//                   <div
//                     className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto
//                     bg-white shadow-lg rounded z-50 min-w-55"
//                   >
//                     <ul className="p-3 space-y-2 text-sm">
//                       {Array.isArray(menu)
//                         ? menu.map((sub) => (
//                             <li
//                               key={sub}
//                               onClick={() => navigate(`/category/${sub}`)}
//                               className="cursor-pointer hover:text-black text-gray-600"
//                             >
//                               {sub}
//                             </li>
//                           ))
//                         : //convert object into array and apply loop on it.
//                           Object.entries(menu).map(([type, list]) => (
//                             <li key={type}>
//                               <p className="font-medium capitalize">{type}</p>
//                               <ul className="ml-3 mt-1 text-gray-600">
//                                 {list.map((sub) => (
//                                   <li
//                                     key={sub}
//                                     onClick={() => navigate(`/category/${sub}`)}
//                                     className="cursor-pointer hover:text-black"
//                                   >
//                                     {sub}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </li>
//                           ))}
//                     </ul>
//                   </div>
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }
---------------------------------------------------------------------------

home.jsx 

import React from "react";
import { CarausolImg } from "@/components/custom/Carausol";
import { useNavigate } from "react-router-dom";
import { CategoryNavbar } from "@/components/custom/CategoryNavbar";
export function Home() {
  const navigate = useNavigate();
  const handleCategoryClick = (item) => {
    console.log(item.id);
    if (item.id == "Delevery") {
      navigate("/Services");
      return;
    }
    // navigate("/Category");
  };
  return (
    <div className="p-5 bg-gray-200 flex flex-col gap-10">
      <CategoryNavbar
        navigate={navigate}
        handleCategoryClick={handleCategoryClick}
      />
      <CarausolImg />

    </div>
  );
}
----------------------------------------------------------------------
Catogories.jsx

import React from "react";
export function CatogoriesBtn({ image, title, onClick,categoryGroups}) {
  return (
    <section className="flex flex-col justify-center items-center relative group">
      <button
        type="submit"
        className="hover:bg-accent transition-all duration-200 cursor-pointer"
        onClick={onClick}
      >
        <img src={image} className="w-30 h-20 object-contain rounded-t-full" />
        <p className="text-black font-medium text-xl tracking-wide hover:text-blue-700">
          {title}
        </p>
      </button>
      {/* --this is use for dropdown hover manually */}
      
      {categoryGroups && categoryGroups.length > 0 && (
        <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <ul>
            {categoryGroups.map((groupItem, idx) => (
              <li
                key={idx}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {groupItem}
              </li>
            ))}
          </ul>
        </div>
      )} 
    </section>
  );
}
---------------------------------------------------------
Home.jsx
import React, { useState } from "react";
import { CarausolImg } from "@/components/custom/Carausol";
import { useNavigate } from "react-router-dom";
import { CategoryNavbar } from "@/components/custom/CategoryNavbar";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "@/API/ProductsAPi";
import { ProductCard } from "@/components/custom/ProductCard";
import { NoDataFound } from "@/components/custom/NoDataFound";

export function Home() {
  const navigate = useNavigate();
  const [endpoint, setEndpoint] = useState("");

  const handleCategoryClick = (item) => {
    console.log(item.id);
    if (item.id == "Delevery") {
      navigate("/Services");
      return;
    }
    navigate("/Category",{state:data});
  };

  const ApiCallHandle = (sub) => {
    setEndpoint(sub);
  };

  const { data } = useQuery({
    queryKey: ["products", endpoint],
    queryFn: () => getProductsByCategory(endpoint),
  });

  if (data) console.log(data, ">>>>>>>>>>>>>>>>>");

  return (
    <div className="p-5 bg-gray-50 flex flex-col gap-10">
      <CategoryNavbar
        navigate={navigate}
        handleCategoryClick={handleCategoryClick}
        ApiCallHandle={ApiCallHandle}
      />
      <CarausolImg />

      {data?.products.length > 0 ? (
        <div className="grid grid-cols-5 gap-6 ">
          {data?.products?.map((item) => (
            <ProductCard ProductData={item} />
          ))}
        </div>
      ) : (
        <NoDataFound
    title="No products available"
    description="Try changing category or clearing applied filters."
    actionText="Clear filters"
  />
      )}
    </div>
  );
}
---------------------------------------------------------
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* <div className="flex justify-evenly items-center">
                  <input
                    {...register("username", { required: true })}
                    placeholder="Email"
                    className="border-b border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-b-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.username && (
                    <span className="flex flex-col text-red-500 text-sm mt-1">
                      This field is required
                    </span>
                  )}
                  <span>Or</span>
                  <input
                    {...register("mobile", { required: true })}
                    placeholder="Mobile number"
                    className="border-b border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-b-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.mobile && (
                    <span className="flex flex-col text-red-500 text-sm mt-1">
                      This field is required
                    </span>
                  )}
                </div> */}

                <div className="flex items-center justify-evenly gap-4">
                  {/* <div className="flex flex-col">
                    <input
                      {...register("username", { required: true })}
                      placeholder="Email"
                      className="border-b border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-b-2 focus:ring-blue-500 focus:border-blue-500"
                    />

                    {errors.username && (
                      <span className="text-red-500 text-sm">
                        {errors.username.message}
                      </span>
                    )}
                  </div> */}

                  <div className="flex flex-col">
                    <input
                      {...register("username")}
                      placeholder="Email"
                      className="border-b border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-b-2 focus:ring-blue-500 focus:border-blue-500"
                    />

                    {errors.username && (
                      <span className="text-red-500 text-sm">
                        {errors.username.message}
                      </span>
                    )}
                  </div>
                  {/* {errors.username && (
                      <span className="text-red-500 text-sm mt-1">
                        This field is required
                      </span>
                    )} */}

                  <span className="text-sm text-gray-500">Or</span>

                  <input
                    {...register("mobile", { required: true })}
                    placeholder="Mobile number"
                    className="border-b border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-b-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 my-4 rounded hover:bg-blue-700 transition duration-200"
                >
                  Continue
                </button>
              </form>