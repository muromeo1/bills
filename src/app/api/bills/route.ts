import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export type BillType = {
	id: number;
	who: string;
	title: string;
	due_to: string;
	value: string;
	paid_on: string;
};

const filePath = path.join(process.cwd(), "/tmp/bills.json");

const bills = async () => {
	const buffer = await fs.readFile(filePath);

	return JSON.parse(buffer.toString());
};

const date = new Date();

export async function GET() {
	return NextResponse.json(await bills());
}

export async function POST(request: Request) {
	const data = await request.json();
	const billsList = await bills();

	billsList.find((bill: BillType) => {
		if (bill.id === data.id) {
			data.paid
				? (bill.paid_on = date.getDate().toString())
				: (bill.paid_on = "");
		}
	});

	fs.writeFile(filePath, JSON.stringify(billsList, null, 2));

	return NextResponse.json({ success: true });
}
