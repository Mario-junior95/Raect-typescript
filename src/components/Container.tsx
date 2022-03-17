type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  const { styles } = props;
  return <div style={styles}>Text content gors here</div>;
};

export default Container;
