import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import BtnContact from "./btn-contact";
import BackgroundImageSection from "../bg_parfume/bg1.jpg";

export default function ImageSection() {
  return (
    <>
      <div className="relative w-full h-[600px] lg:h-[560px] mt-36">
        <img
          src={BackgroundImageSection}
          alt="background parfume"
          className="w-full h-full bg-center bg-cover object-cover"
        />
        <div className="absolute top-6 lg:top-36 left-0 pl-2">
          <div className="font-bold text-5xl lg:text-7xl tracking-wider text-white text-shadow mb-10">
            ABOUT <span className="block pt-3 lg:inline">STORE</span>
          </div>
          <p className="text-wrap text-white text-base font-medium text-shadow text-opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            ducimus eligendi eveniet adipisci odio blanditiis eius temporibus,
            nemo doloribus cupiditate omnis eos nostrum distinctio maiores
            beatae quis deserunt! Enim maxime saepe porro delectus tenetur
            officiis aspernatur illum voluptatibus voluptatum quaerat suscipit
            debitis reprehenderit repudiandae temporibus at iure, veritatis
            numquam quidem.
          </p>
          <br /> <hr /> <br />
          <p className="text-wrap text-white text-base font-medium text-shadow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            corporis fugiat laudantium consequatur quae modi animi omnis
            adipisci ipsa laboriosam nisi sit explicabo dicta doloribus
            distinctio, id ad esse eos?
          </p>
          <BtnContact />
        </div>
        <div className="absolute bottom-1 left-0 pl-2 p-3 flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-shadow hover:text-orange-400"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-shadow hover:text-orange-400"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-shadow hover:text-orange-400"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-shadow hover:text-orange-400"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-shadow hover:text-orange-400"
          >
            <FaYoutube size={30} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-shadow hover:text-orange-400"
          >
            <FaFacebook size={30} />
          </a>
        </div>
      </div>
    </>
  );
}
