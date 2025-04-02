import { FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled, PhoneFilled, MailFilled, EnvironmentFilled } from "@ant-design/icons";

export default function FooterEl() {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-red-500 text-lg font-semibold">DREAM LIMITLESS!</h2>
          <p className="mt-2">
            Prorata Car is a Smarter, Affordable & Convenient way to own, use, and experience cars.
          </p>
          <p className="text-yellow-500 font-semibold mt-3">#startupindia</p>
        </div>
        <div className="md:w-1/3 mb-6 md:mb-0">
          <p className="flex items-center">
            <PhoneFilled className="mr-2 text-yellow-400" /> +91-9990907449
          </p>
          <p className="flex items-center">
            <MailFilled className="mr-2 text-yellow-400" /> info@idmits.com
          </p>
          <p className="flex items-center">
            <EnvironmentFilled className="mr-2 text-yellow-400" /> Contact Us
          </p>
        </div>
        <div className="md:w-1/3">
          <ul>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="flex space-x-4 mt-3 text-xl">
            <FacebookFilled className="cursor-pointer hover:text-blue-500" />
            <InstagramFilled className="cursor-pointer hover:text-pink-500" />
            <LinkedinFilled className="cursor-pointer hover:text-blue-700" />
            <YoutubeFilled className="cursor-pointer hover:text-red-600" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4 text-xs">
        <p>Copyright © 2025. Prorata Technologies Pvt. Ltd. All rights reserved.</p>
        <p className="mt-2">
          Proratacar.com is a website operated by Prorata Technologies Pvt. Ltd. (“Prorata”) and by
          accessing the website and any pages thereof, you agree to be bound by its terms of service
          and privacy policy...
        </p>
      </div>
    </footer>
  );
}
