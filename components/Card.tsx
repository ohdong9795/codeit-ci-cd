interface Props {
  value: string;
}

export default function Card({ value }: Props) {
  return <div className={`px-6 py-6 mt-8`}>{value}</div>;
}
