import { Button, Center } from "@chakra-ui/react";

interface Props {
  loading: boolean;
  bg?: string;
  h?: string;
  text: string;
}

function ProductTile(props: Props) {
  return (
    <>
      {props.loading && <div>Loading</div>}
      {!props.loading && <Button colorScheme="blue">Button</Button>}

      <Center
        bg={props.bg || "white"}
        h={props.h || "100px"}
        w="100%"
        color="black"
      >
        {props.text}
      </Center>
    </>
  );
}

export default ProductTile;
