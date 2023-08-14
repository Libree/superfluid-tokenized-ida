import SideBarLayout from "@/layouts/sidebarLayout";
import { Box, Container, Typography } from "@mui/material";
import SuscriptionTable from "@/components/suscriptionTable";

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
            <SuscriptionTable />

        </Container>
    )
};

Dashboard.getLayout = (page: any) => (
    <SideBarLayout>{page}</SideBarLayout>
);

export default Dashboard;
