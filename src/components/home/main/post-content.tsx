interface PostContentProps {
    text: string;
  }
  
  const PostContent = ({ text }: PostContentProps) => {
    return (
      <div className="h-full col-span-2 flex items-center justify-center">
        <p className="h-full line-clamp-[12]">{text}</p> {/* Truncamento de várias linhas */}
      </div>
    );
  };
  
  export default PostContent;
  