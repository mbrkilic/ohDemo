import React from "react";
import Footer from "./Footer";
import EndSec from "./EndSec";

function ProfilePage() {
  const jobs = [
    {
      name: "OH.STUDIO",
      date: "2017 — Present",
      jobTitle: "Freelance Designer",
      jobName: "Director",
    },
    {
      name: "Friendly Studio",
      date: "2021 — Present",
      jobTitle: "Lead Product Designer",
      jobName: "Freelance",
    },
    {
      name: "R/GA",
      date: "2022",
      jobTitle: "Senior Visual Designer",
      jobName: "Freelance",
    },
    {
      name: "R/GA",
      date: "2021",
      jobTitle: "Senior Visual Designer",
      jobName: "Freelance",
    },
    {
      name: "AKQA",
      date: "2021",
      jobTitle: "Senior Designer",
      jobName: "Freelance",
    },
    {
      name: "AKQA",
      date: "2020",
      jobTitle: "Senior Designer",
      jobName: "Freelance",
    },
  ];

  const clients = [
    {
      logo: "https://i.eurosport.com/2016/11/01/1961061-41216705-2560-1440.jpg",
      
      name: "eurosport"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/RGA_logo_2019.jpg",
      name:"rga"
    },
    {
      logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
      name:"nike"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/AKQA-Logo.svg",
      name: "akqa"
    },
    {
      logo: "https://d19ayerf5ehaab.cloudfront.net/assets/store-498417/498417-logo-1685114875.png",
      name: "musclegun"
    },
    {
        logo: "https://churchillsquare.com/wp-content/uploads/2018/05/schuh-.png",
        name: "schuh"
    }
  ];

  return (
    <>
      <div className="flex justify-center items-center">
        <p className="w-full text-4xl font-bold flex justify-center items-center m-40">
          Hey 👋🏼 I'm Oli
        </p>
      </div>
      <div className="flex justify-center items-center flex-col mx-auto">
        <p className="mr-2 m-4 bg-gray-200 rounded-full py-2 px-4">About</p>
        <p className="text-3xl font-semibold mb-4">
          A freelance designer based in the UK. I <br /> combine my experience
          in product and <br /> brand to solve problems, tell stories, and{" "}
          <br /> create compelling experiences.
        </p>

        <p className="mr-2 mt-40 bg-gray-200 rounded-full py-2 px-4">
          Experience
        </p>
        <p className="text-3xl font-semibold mb-10 ">Where I've worked</p>

        <div className="flex justify-between items-center w-full flex-wrap">
          {jobs.map((job) => (
            <div className="flex justify-center items-center flex-col w-1/3 p-4 ">
              <h1 className=" text-sm font-light m-2">{job.date}</h1>
              <p className=" text-2xl font-bold m-2">{job.name}</p>
              <p className="font-light m-2 text-sm">{job.jobTitle}</p>
              <p className=" text-sm mr-2 mb-4 bg-gray-200 rounded-full py-2 px-4">
                {job.jobName}
              </p>
            </div>
          ))}
        </div>

        <p className="mr-2 mt-40 bg-gray-200 rounded-full py-2 px-4">Clients</p>
        <p className="text-3xl font-semibold mb-10 ">Who I've worked with</p>

        <div className="flex justify-between items-center w-full flex-wrap">
          {clients.map((client) => (
            <div className="flex justify-center items-center flex-col w-1/3 p-4 ">
            <img src={client.logo} alt={`${client.name}`} width="200"/>
              
            </div>
          ))}
        </div>

        {/* 
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center flex-col w-1/3 p-4">
            <p className=" font-light">2017 — Present</p>
            <p className="font-bold">OH.STUDIO</p>
            <p className="font-light">Freelance Designer</p>
            <p className="mr-2 mb-4 bg-gray-200 rounded-full py-2 px-4">
              Director
            </p>
          </div>

          <div className="flex justify-center items-center flex-col w-1/3 p-4">
            <p className=" font-light">2021 — Present</p>
            <p className="font-bold">Friendly Studio</p>
            <p className="font-light">Lead Product Designer</p>
            <p className="mr-2 mb-4 bg-gray-200 rounded-full py-2 px-4">
              Freelance
            </p>
          </div>

          <div className="flex justify-center items-center flex-col w-1/3 p-4">
            <p className=" font-light">2022</p>
            <p className="font-bold">R/GA</p>
            <p className="font-light">Senior Visual Designer</p>
            <p className="mr-2 mb-4 bg-gray-200 rounded-full py-2 px-4">
              Freelance
            </p>
          </div>
        </div> */}
      </div>

      <EndSec/>
    </>
  );
}

export default ProfilePage;
