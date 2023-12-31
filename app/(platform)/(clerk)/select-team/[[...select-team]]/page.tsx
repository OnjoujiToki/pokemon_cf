import {OrganizationList} from "@clerk/nextjs";

export default function CreateOrganizationPage() {
    return <OrganizationList
        hidePersonal={true}
        afterSelectOrganizationUrl={"/teams/:id"}
        afterCreateOrganizationUrl={"/teams/:id"}
    />;
}
