import SideBarLayout from "@/layouts/sidebarLayout";
import { Box, Container, Typography } from "@mui/material";

function Dashboard() {
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

Dashboard.getLayout = (page: any) => (
    <SideBarLayout>{page}</SideBarLayout>
);

export default Dashboard;