import {OrganizationList} from "@clerk/nextjs";

export default function CreateOrganizationPage() {
    return <OrganizationList
        hidePersonal={true}
        afterSelectOrganizationUrl={"/user/:id"}
        afterCreateOrganizationUrl={"/user/:id"}
    />;
}
