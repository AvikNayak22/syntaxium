import Image from "next/image";
import { UserResource } from "@clerk/types";
import { Id } from "@/convex/_generated/dataModel";

export interface ProfileInfoProps {
  userData: {
    _id: Id<"users">;
    _creationTime: number;
    userId: string;
    email: string;
    name: string;
  };
  user: UserResource;
}

const ProfileInfo = ({ userData, user }: ProfileInfoProps) => {
  return (
    <div className="relative flex items-center gap-8">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
        <Image
          src={user.imageUrl}
          alt="Profile"
          width={96}
          height={96}
          className="rounded-full border-2 border-gray-800 relative z-10 group-hover:scale-105 transition-transform"
        />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-white">{userData.name}</h1>
        </div>
        <p className="text-gray-400 flex items-center gap-2">
          {userData.email}
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
