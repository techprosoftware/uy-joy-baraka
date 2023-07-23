import {CardSkeleton} from "@components/Cards/CardSkeleton";
import {Card} from "@components/Cards/Cards";


export const List = (fetcher) => {
  const mockData = [1,2,3,4,5,6,7,8,9,10]
  // eslint-disable-next-line react/prop-types
  const {isLoading, data, clicked} = fetcher.fetcher
  console.log(clicked)
  return <>
    {clicked ? (<ul className="card-list mt-4">
      {isLoading ? mockData.map(mock => <CardSkeleton key={mock}/>) : data?.map(card => <Card key={card?.slug} card={card}/>) }
    </ul>) : ""}
  </>
}