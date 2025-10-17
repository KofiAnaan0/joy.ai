import { ApproachType } from "@/types/approachType";
import enterprise from "@/public/approach/enterprise.png";
import iam from "@/public/approach/iam.png";
import siem from "@/public/approach/siem.png";
import endpoint from "@/public/approach/endpoint.png";
import operations from "@/public/approach/operations.png";
import analytics from "@/public/approach/analytics.png";

export const approachData: ApproachType[] = [
	{
		id: 1,
		index: "enterprise-management",
		title: "ENTERPRISE SERVICE MANAGEMENT",
		description:
			"Streamline IT and business workflows with a unified service management platform. We help organizations deliver faster, more reliable services that drive efficiency, reduce costs, and improve employee and customer experiences.",
		imageUrl: enterprise,
	},
	{
		id: 2,
		index: "iam",
		title: "IDENTITY & ACCESS MANAGEMENT",
		description:
			"Protect your business with seamless control over who has access to what. Our IAM solutions simplify user onboarding and offboarding, enforce the right privileges, and reduce the risk of unauthorized access — keeping your data secure and your people productive.",
		imageUrl: iam,
	},
];
