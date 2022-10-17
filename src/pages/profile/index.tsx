import Head from "next/head";
import ProfileArticle from "../../components/organisms/article/profile-article";

const ProfilePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>프로필</title>
        <meta name="description" content="프로트엔드 개발자가 자고 있습니다." />
      </Head>

      <h1 className="text-4xl my-5">Profile.</h1>
      <ProfileArticle />
    </>
  );
};

export default ProfilePage;
