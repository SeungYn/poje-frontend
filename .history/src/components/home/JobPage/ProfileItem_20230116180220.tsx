export default function ProfileItem() {
  return (
    <ProfileItem>
      <ProfileCard>
        <ProfileImg
          src={`${process.env.PUBLIC_URL}/public_assets/basicProfileImg.webp`}
        />
        <ProfileContent>
          <h1>{item.name}</h1>
          <p>{item.title}</p>
          <LikeGroup>
            <AiTwotoneHeart className='like' />
            <span>{item.like}</span>
          </LikeGroup>
        </ProfileContent>
      </ProfileCard>
    </ProfileItem>
  );
}
