import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      roundImage
      color="green"
      subtitle="profile"
      title="William"
      description="15 public playlists"
      image="https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/571.png"
    >
      <div>Home page</div>
    </GradientLayout>
  );
};

export default Home;
