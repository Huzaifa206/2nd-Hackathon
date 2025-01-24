export default function Footer() {
    return (
     <footer className="w-screen bg-black text-white p-10 text-sm font-sans ">
        <div className="flex justify-between mb-5">
      
      <div className="flex-1 mx-5">
        <p className="my-1">Find a Store</p>
        <p className="my-1">Become a Member</p>
        <p className="my-1">Sign Up for Email</p>
        <p className="my-1">Send Us Feedback</p>
        <p className="my-1">Student Discounts</p>
      </div>

      
      <div className="flex-1 mr-5">
        <p className="font-bold mb-2.5">Get Help</p>
        <ul className="list-none p-0">
          <li className="my-1">Order Status</li>
          <li className="my-1">Delivery</li>
          <li className="my-1">Returns</li>
          <li className="my-1">Payment Options</li>
          <li className="my-1">Contact Us</li>
        </ul>
      </div>

     
      <div className="flex-1 mr-5">
        <p className="font-bold mb-2.5">About Nike</p>
        <ul className="list-none p-0">
          <li className="my-1">News</li>
          <li className="my-1">Careers</li>
          <li className="my-1">Investors</li>
          <li className="my-1">Sustainability</li>
        </ul>
      </div>
    </div>

   
    <div className="flex justify-between items-center border-t border-gray-700 pt-5">
      <p>© 2023 Nike, Inc. All Rights Reserved</p>
      <ul className="flex list-none p-0">
        <li className="ml-5 cursor-pointer hover:underline">Guides</li>
        <li className="ml-5 cursor-pointer hover:underline">Terms of Sale</li>
        <li className="ml-5 cursor-pointer hover:underline">Terms of Use</li>
        <li className="ml-5 cursor-pointer hover:underline">Privacy Policy</li>
      </ul>
    </div>
  </footer>
    );
  }
  