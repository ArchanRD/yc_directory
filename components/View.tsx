import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUP_VIEWS_BY_ID_QUERY } from "@/lib/queries";

const View = async ({ id }: { id: string }) => {
  const { _id, views } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_BY_ID_QUERY, { id });

    // TODO: UPDATE NUMBER OF VIEWS WHENEVER SOMEBODY SEES THE POST
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />{" "}
      </div>
      <p className="view-text">
        <span className="font-black">{views} views</span>
      </p>
    </div>
  );
};

export default View;
