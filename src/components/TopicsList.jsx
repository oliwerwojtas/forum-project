const TopicList = ({ topics }) => {
  return (
    <div>
      {topics.length === 0 && <p>No topics!</p>}
      {topics.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
};

export default TopicList;
