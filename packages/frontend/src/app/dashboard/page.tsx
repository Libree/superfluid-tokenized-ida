import SideBarLayout from "@/layouts/sidebarLayout";
import { Container } from "@mui/material";
import SuscriptionTable from "@/components/suscriptionTable";

function Dashboard() {
    return (
        <Container>
            <SuscriptionTable />
        </Container>
    )
};

Dashboard.getLayout = (page: any) => (
    <SideBarLayout>{page}</SideBarLayout>
);

export default Dashboard;
