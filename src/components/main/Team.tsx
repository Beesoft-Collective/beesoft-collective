import React from "react";
import TeamMember from "./TeamMember";
import { TeamMemberItems } from "@/../config";

const Team = () => {
  return (
    <div className="py-12 my-12 mx-auto max-w-8xl px-4" id="team">
      <div className=" max-w-4xl mx-auto">
        <div
          className="items-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="text-primary font-black text-4xl text-center">
            Our Development Team
          </h2>
          <p className="text-primary text-md text-center mt-4">
            Get to Know the Hive: The brilliant minds collaborating on the
            future of front-end development. Meet the passionate team behind
            Beehive!
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {TeamMemberItems.map((member) => (
            <TeamMember
              key={member.name}
              imageSrc={member.imageSrc}
              name={member.name}
              title={member.title}
              description={member.description}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
