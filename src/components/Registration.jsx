import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  Image
} from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        username,
        email,
        password
      });
      if (response.status === 200) {
        navigate("/login"); 
      }
    } catch (err) {
      setError(err.response.data.err || "Something went wrong");
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection={["column", "column", "column", "row"]}
    >
      <Stack
        width={["100%", "100%", "100%", "50%"]}
        justify="center"
        alignSelf="center"
      >
        <Image objectFit="cover" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOx1FRqMQpDJsPw_j94IEadUIsgvP1IlHyUw&s"} alt="Signup" />
      </Stack>
      <Box width="100%">
        <Stack
          direction="row"
          pl={16}
          pr={16}
          pt={8}
          pb={10}
          align="center"
          justify="flex-end"
        >
          <Text
            fontSize="xs"
            color="gray.400"
            lineHeight="tall"
            fontFamily="body"
          >
            Already have an account?
          </Text>
          <Link to={"/login"}>
            <Button
              size="xs"
              bg="white"
              color="gray.500"
              border="1px"
              borderColor="gray.300"
              borderRadius="full"
              py={3}
              px={4}
              fontWeight="medium"
              cursor="pointer"
              _focus={{
                outline: "none"
              }}
              _hover={{
                bg: "white"
              }}
            >
              SIGN IN
            </Button>
          </Link>
        </Stack>
        <Stack pl={16} pr={16} mb={10}>
          <Text m={0} fontSize="3xl" fontWeight="bold" fontFamily="body">
            Hello there!
          </Text>
          <Text
            m={0}
            fontSize="sm"
            fontFamily="body"
            color="gray.400"
            lineHeight="tall"
          >
            Register your account
          </Text>
        </Stack>
        <Stack pl={16} pr={24} spacing={6}>
          <form onSubmit={handleSignup}>
            <FormControl id="username">
              <FormLabel
                fontSize="sm"
                lineHeight="tall"
                fontFamily="body"
                fontWeight="normal"
                pb={"0.5rem"}
              >
                Username
              </FormLabel>
              <Input
                type="text"
                size="sm"
                borderColor="gray.200"
                focusBorderColor="purple.500"
                text="sm"
                lineHeight="tall"
                placeholder="Username"
                fontFamily="body"
                _placeholder={{ color: "gray.400" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel
                fontSize="sm"
                lineHeight="tall"
                fontFamily="body"
                fontWeight="normal"
                pb={"0.5rem"}
              >
                Email
              </FormLabel>
              <Input
                type="email"
                size="sm"
                borderColor="gray.200"
                focusBorderColor="purple.500"
                text="sm"
                lineHeight="tall"
                placeholder="abc@gmail.com"
                fontFamily="body"
                _placeholder={{ color: "gray.400" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel
                fontSize="sm"
                lineHeight="tall"
                fontFamily="body"
                fontWeight="normal"
                pb={"0.5rem"}
              >
                Password
              </FormLabel>
              <Input
                type="password"
                size="sm"
                borderColor="gray.200"
                focusBorderColor="purple.500"
                text="sm"
                lineHeight="tall"
                placeholder="6+ characters"
                fontFamily="body"
                _placeholder={{ color: "gray.400" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            {error && <Box color="red.500">{error}</Box>}
            <Button
              my={3}
              size="md"
              w={170}
              h={45}
              borderRadius="40px"
              bg="purple.500"
              color="white"
              border="0"
              fontWeight="400"
              fontFamily="body"
              fontSize="sm"
              cursor="pointer"
              _focus={{
                outline: "none"
              }}
              _hover={{
                bg: "purple.500"
              }}
              boxShadow="lg"
              type="submit"
            >
              Signup
            </Button>
          </form>
        </Stack>
      </Box>
    </Box>
  );
}

export default Registration;
