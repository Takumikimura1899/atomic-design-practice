// import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `拓-${val}`,
    image: "https://source.unsplash.com/O5IeTqgkBrU",
    email: "aaaaaaaaaa",
    phone: "00000",
    company: {
      name: ".....株式会社"
    },
    website: "https://www.udemy.com/"
  };
});

export const Users = () => {
  // const { state } = useLocation();
  // console.log(state);
  const { userInfo, setUserInfo } = useContext(UserContext);

  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };

  return (
    <SContainer>
      <h2>User一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切替</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
