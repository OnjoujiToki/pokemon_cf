import {OrganizationList} from "@clerk/nextjs";

export default function CreateOrganizationPage() {
    return <OrganizationList
        hidePersonal={true}
        afterSelectOrganizationUrl={"/area/:id"}
        afterCreateOrganizationUrl={"/area/:id"}
    />;
}
