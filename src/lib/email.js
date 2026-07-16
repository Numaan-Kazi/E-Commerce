  import emailjs from "@emailjs/browser";

  export const sendOrderEmail = async ({
    ownerName,
    customerName,
    productName,
  }) => {
    return emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        owner_name: ownerName,
        customer_name: customerName,
        product_name: productName,
        order_date: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
  };
