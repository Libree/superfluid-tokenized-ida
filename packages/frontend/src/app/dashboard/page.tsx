import { Box, Container, Typography } from "@mui/material";

export default function Dashboard() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box>
                <Typography variant="h4" component="h4" gutterBottom>
                    Dashboard
                </Typography>
            </Box>

            {/* table */}
            
        </Container>
    )
};
