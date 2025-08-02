"use client";
import { Forms } from "@/components";
import { HomeContainerStyle } from "@/styles/HomeStyle";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const _handleSubmit = () => {
    router.push("/dashboard");
  };

  return (
    <HomeContainerStyle>
      <div className="h_title">Meeting Room Booking</div>
      <div className="h_sub_title">By TechUp FSD 9 Theme</div>
      <Forms.SignInForm onSubmit={_handleSubmit} />
    </HomeContainerStyle>
  );
}
