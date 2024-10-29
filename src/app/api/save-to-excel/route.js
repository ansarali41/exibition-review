import path from 'path';
import fs from 'fs';
import ExcelJS from 'exceljs';

export async function POST(req) {
    const { name, organization, comment } = await req.json();

    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'user_data.xlsx');

    console.log('Data received:', { name, organization, comment });
    console.log('File path:', filePath);

    // Ensure the data directory exists
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
        console.log('Data directory created:', dataDir);
    }

    const workbook = new ExcelJS.Workbook();

    try {
        let worksheet;

        // Check if the file exists
        if (fs.existsSync(filePath)) {
            try {
                await workbook.xlsx.readFile(filePath);
                console.log('Existing file read successfully.');
                worksheet = workbook.getWorksheet('Sheet1');
                console.log('Existing worksheet found.');
            } catch (readError) {
                console.error('Error reading existing file:', readError);
                console.log('Creating a new workbook and worksheet.');
                worksheet = workbook.addWorksheet('Sheet1');
            }
        } else {
            console.log('File does not exist. Creating a new workbook and worksheet.');
            worksheet = workbook.addWorksheet('Sheet1');
        }

        // Define the columns if they don't exist
        if (worksheet.getRow(1).getCell(1).value === null) {
            worksheet.columns = [
                { header: 'Name', key: 'name', width: 30 },
                { header: 'Organization', key: 'organization', width: 30 },
                { header: 'Comment', key: 'comment', width: 50 },
            ];
            console.log('Column headers added.');
        }

        // Add the new row
        if (name || organization || comment) {
            const newRow = worksheet.addRow([name, organization, comment]);
            console.log('New row added:', newRow.values);
        } else {
            console.warn('Incomplete data provided. Row not added.');
        }

        // Save the file
        await workbook.xlsx.writeFile(filePath);
        console.log('File saved successfully.');

        // Verify the file contents
        const savedWorkbook = new ExcelJS.Workbook();
        await savedWorkbook.xlsx.readFile(filePath);
        const savedWorksheet = savedWorkbook.getWorksheet('Sheet1');
        console.log('Saved file contents:');
        savedWorksheet.eachRow((row, rowNumber) => {
            console.log(`Row ${rowNumber}:`, row.values);
        });

        return new Response(JSON.stringify({ message: 'Data saved successfully!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in file operation:', error);
        return new Response(JSON.stringify({ message: 'Failed to save data.', error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
