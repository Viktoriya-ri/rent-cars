import { LineWave } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LineWave
        height="150"
        width="150"
        color="geen"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
    />
  );
};

export default Loader; 