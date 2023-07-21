interface FlexibleDividerProps {
  content: string;
}

const FlexibleDivider: React.FC<FlexibleDividerProps> = ({ content }) => {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t-2 border-primary" />
      <span className="flex-shrink mx-4 text-primary text-2xl font-inter font-medium">
        {content}
      </span>
      <div className="flex-grow border-t-2 border-primary" />
    </div>
  );
};

export default FlexibleDivider;
