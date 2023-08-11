import { Wrap, WrapItem, Center, Flex, Badge, Text } from "@chakra-ui/react";
import { Video } from "../type";
import { ViewIcon } from "@chakra-ui/icons";

type Props = {
  data: Video;
  onVideoClick: (id: string) => void;
};

const VideoUI: React.FC<Props> = (props) => {
  return (
    <Flex
      width={200}
      height={400}
      padding={2}
      marginLeft={1}
      marginTop={1}
      onClick={() => props.onVideoClick(props.data.id)}
      borderRadius={4}
      flexDirection={"column"}
      justifyContent={"space-between"}
      bgImg={props.data.thumbnail}
      bgRepeat={"no-repeat"}
      backgroundPosition={"center"}
      bgSize={"cover"}
    >
      <Wrap>
        <WrapItem>
          <Center>
            <Badge variant={"solid"} colorScheme="red">
              LIVE
            </Badge>
          </Center>
        </WrapItem>
        <WrapItem>
          <Badge variant={"subtle"}>
            <Center>
              <ViewIcon />
              {props.data.viewCount}
            </Center>
          </Badge>
        </WrapItem>
      </Wrap>

      <Wrap>
        <WrapItem>
          <Flex flexDirection={"column"}>
            <Badge variant={"solid"} colorScheme="red">
              Hanya saat LIVE
            </Badge>
            <Badge variant={"solid"} colorScheme="green">
              Kupon Spesial
            </Badge>
          </Flex>
        </WrapItem>
        <WrapItem>
          <Flex flexDirection={"column"}>
            <Text color={"white"}>{props.data.title}</Text>
            <Text color={"white"}>{props.data.seller}</Text>
          </Flex>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

export default VideoUI;