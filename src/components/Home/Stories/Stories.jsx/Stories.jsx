import useSWR from "swr"
import { getStories } from "../../../../services/stories";
import StoriesRenderer from "./StoriesRenderer/StoriesRenderer";
import CenteredMessage from "../../CenteredMessage/CenteredMessage";



const Stories = () => {
    let stories = null;
    const { data, error, isLoading } = useSWR('/top-stories', getStories);

    if (isLoading) return <CenteredMessage message={"Loading..."} />
    if (error) return <CenteredMessage message={error.message} />
    if (data) {
        stories = data.data.stories
        return < StoriesRenderer stories={stories} />
    }


}

export default Stories
