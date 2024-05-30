import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError() as { status: number; message: string };
  let errorMsg =
    error.status === 404 ? 'Page is not found' : 'An error has ocurred';
  return (
    <div className="bg-slate-100 m-20 min-h-72 p-20 rounded-md flex flex-col">
      <h1 className="text-center text-4xl mb-16">Something is not right!</h1>
      <p className="text-center">
        <i>{errorMsg}</i>
      </p>
    </div>
  );
};

export default NotFound;
