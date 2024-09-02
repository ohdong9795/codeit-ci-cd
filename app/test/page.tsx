type Status = 'Start' | 'InProgress' | 'Cancel' | 'Complete';

const STATUS: Record<Status, string> = {
  Start: '시작',
  InProgress: '진행중',
  Cancel: '취소',
  Complete: '완료',
};

function isStatus(key: any): key is Status {
  return Object.keys(STATUS).includes(key);
}

export default function Test() {
  return (
    <>
      {Object.entries(STATUS).map(([key, value]) => {
        if (isStatus(key)) {
          return <div key={key}>{value}</div>;
        }

        return <div key={key}>{value}</div>;
      })}
    </>
  );
}
