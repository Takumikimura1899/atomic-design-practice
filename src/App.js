import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "拓",
  image: "https://source.unsplash.com/O5IeTqgkBrU",
  email: "aaaaaaaaaa",
  phone: "00000",
  company: {
    name: ".....株式会社"
  },
  website: "https://www.udemy.com/"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
