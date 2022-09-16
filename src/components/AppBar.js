import { Box } from "./Box";
import { AppBarList, AppBarItem, NavTitle } from "./GlobalStyles";

export const AppBar = () => {
    return (
        <Box as="header"
            mb={5}
            p={3}
            bg="#483233"
            boxShadow="shadow">
            <Box as="nav">
                <AppBarList>
                    <AppBarItem>
                        <NavTitle to="/">Home</NavTitle>
                    </AppBarItem>
                    <AppBarItem>
                        <NavTitle to="/movies">Movies</NavTitle>
                    </AppBarItem>
                </AppBarList>
            </Box>
        </Box>
    );
};