import { secondsToMinutes } from '../utils/seconds-to-minutes';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <div className="timer">{secondsToMinutes(props.mainTime)}</div>;
}