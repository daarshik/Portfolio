import React from "react";
import "./home.css";
import Skills from "./Skills";
import HeroIntro from "./HeroIntro";
import HeroImg from "./HeroImg";
import Experience from "./Experience&Education";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="p-2 mt-40 md:ml-32">
          <HeroIntro />
        </div>
        <div
          className=" md:ml-40  md:mt-60  md:mr-20 md:p-35 md:w-[80%] 
            sm:w-[40%]
            lg:ml-40  lg:mt-60  lg:mr-20 md:p-35 lg:w-[100%] 
            box-border bg-cover"
        >
          <HeroImg />{" "}
        </div>
      </div>
      <Skills className="md:mt-32 md:h-full mb-0 " />
      <Experience />
      <p className="text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quasi
        voluptatem incidunt quos maiores rerum similique iure inventore odio
        quia alias beatae provident tempora reiciendis, adipisci temporibus
        animi, praesentium blanditiis quae laudantium ea distinctio, cupiditate
        quidem aliquam! Quia magni quasi explicabo, veniam sequi repudiandae
        saepe ipsam quisquam eveniet necessitatibus blanditiis? Vel tempore
        quisquam corrupti quos voluptatibus atque asperiores necessitatibus modi
        esse veritatis cupiditate aliquid alias suscipit debitis ullam
        distinctio incidunt, unde delectus exercitationem sit? Obcaecati in
        perspiciatis unde provident maiores repudiandae, amet harum, est, optio
        natus commodi ipsa dolorum culpa vitae fugit tempore illum cumque ullam
        asperiores delectus. Nisi, ut. Asperiores, architecto. Molestias,
        voluptatibus? Nisi laboriosam hic sit labore doloribus corrupti magni
        quae nihil quo enim voluptas esse sint ut error ipsum vero aut delectus
        excepturi commodi ducimus, libero temporibus cum cupiditate. Voluptas
        molestias quisquam corrupti molestiae laboriosam, explicabo modi tenetur
        autem aliquam rerum alias nisi, quia doloremque similique ducimus totam.
        Enim labore ipsa, iusto nihil esse dolore. Sapiente consectetur
        blanditiis cupiditate quas, ipsam aliquam, asperiores unde, culpa est
        dolores explicabo veniam officia. Distinctio velit quam eligendi minus
        ad, assumenda laudantium nihil, aspernatur totam iste commodi ipsa
        obcaecati, aut impedit qui error ipsum dolor sequi. Cum suscipit maiores
        maxime neque.
      </p>
    </div>
  );
};

export default Home;
//
