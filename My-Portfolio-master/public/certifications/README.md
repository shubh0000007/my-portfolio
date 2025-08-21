# Certifications Folder

This folder contains your professional certification files and badges.

## File Structure

Place your certification files here with the following naming convention:

### For PDF Certificates:
- `microsoft-powerbi-data-analyst.pdf` - Your Microsoft Power BI certification (renamed from original)
- Use descriptive names with hyphens, lowercase

### For Digital Badges:
- `aws-certified-cloud-practitioner.png` - Your AWS CCP badge
- Use PNG or JPG format for best quality

## Current Certifications Configured:

1. **Microsoft Certified: Power BI Data Analyst Associate**
   - Type: PDF Certificate
   - File: `microsoft-powerbi-data-analyst.pdf`
   - Credential ID: `23229FC6A0A224FA`
   - Issue Year: 2025
   - Verification: Microsoft Learn
   - Skills: Power BI Pro, Advanced DAX, Data Modeling, Report Development, Dashboard Design, Business Intelligence

2. **AWS Certified Cloud Practitioner**
   - Type: Digital Badge
   - File: `aws-certified-cloud-practitioner.png`
   - Badge ID: `90d7e8b5-4b9e-4db4-abbe-ae1cd9344f73`
   - Issue Year: 2025
   - Verification: Credly
   - Skills: AWS Cloud, Cloud Security, Cloud Architecture, AWS Services, DevOps, Infrastructure as Code

## How to Add New Certifications:

1. **Add the file** to this folder
2. **Update the certifications array** in `src/components/Certifications.tsx`
3. **Follow the existing format** for consistency

## File Types Supported:
- ✅ PDF files (.pdf)
- ✅ Image files (.png, .jpg, .jpeg)
- ✅ Verification links
- ✅ Downloadable badges

## Tips:
- Keep file sizes reasonable (< 5MB for PDFs, < 2MB for images)
- Use high-quality images for badges
- Ensure PDFs are readable and professional
- Test all links and downloads after adding
