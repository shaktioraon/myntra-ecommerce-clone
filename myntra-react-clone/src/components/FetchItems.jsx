import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    const API_URL = "https://myntra-ecommerce-backend.onrender.com";

    fetch(`${API_URL}/items`, { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingEnded());

        const validItems = items.filter(
          (item) => item && item.rating
        );

        dispatch(itemsActions.addInitialItems(validItems));
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch items:", error);
          dispatch(fetchStatusActions.markFetchingEnded());
        }
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;