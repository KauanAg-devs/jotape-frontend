interface PostImageProps {
    imageUrl: string;
  }
  
  const PostImage = ({ imageUrl }: PostImageProps) => {
    return (
      <div className="h-10 w-10 ml-16 bg-gray-500 rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={imageUrl}
          alt="user-profile-img"
          className="h-full w-full object-cover"
        />
      </div>
    );
  };
  
  export default PostImage;
  