import React from "react";
import { useQuery, useMutation } from "react-query";

export default function ApiCallings() {
  const getUrl = "https://reqres.in/api/users/2";
  const postUrl = "https://reqres.in/api/users";

  // helper method
  const handlePost = async () => {
    return await fetch(postUrl, {
      method: "POST",

      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    }).then((res) => res.json());
  };

  const resolveObject = (data) => {
    return Object.entries(data).map((item) => (
      <li key={item}>
        {item[0]} : {item[1]}
      </li>
    ));
  };

  //Use Query
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(getUrl).then((res) => res.json())
  );

  //use Mutation
  const mutation = useMutation(() => handlePost());

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div>
        {isFetching ? "fetching" : <ul>{resolveObject(data.data)}</ul>}
        {mutation.isError ? (
          <div>An error occurred: {mutation.error.message}</div>
        ) : null}

        {mutation.isSuccess ? (
          <div>
            Data added! <ul>{resolveObject(mutation.data)}</ul>
          </div>
        ) : null}
        {console.log(mutation)}
      </div>

      <div>
        {mutation.isLoading ? (
          "Adding user..."
        ) : (
          <>
            {mutation.isSuccess ? <div>User added!</div> : null}

            <button
              onClick={() => {
                mutation.mutate();
              }}
            >
              Mutate Button to Add user
            </button>
          </>
        )}
      </div>
    </>
  );
}
