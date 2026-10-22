from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

out_dir = Path('assets/cv')
out_dir.mkdir(parents=True, exist_ok=True)
out_file = out_dir / 'Neil-Herbert-Betacura-CV.pdf'

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='TitleStyle', fontName='Helvetica-Bold', fontSize=22, leading=26, textColor=colors.HexColor('#0d1b2a'), alignment=1))
styles.add(ParagraphStyle(name='SectionTitle', fontName='Helvetica-Bold', fontSize=12, textColor=colors.HexColor('#0e7490'), spaceAfter=8, leading=14))
styles.add(ParagraphStyle(name='Body', fontName='Helvetica', fontSize=10, leading=14, textColor=colors.HexColor('#1f2937')))
styles.add(ParagraphStyle(name='Small', fontName='Helvetica', fontSize=9, leading=12, textColor=colors.HexColor('#374151')))

story = []
story.append(Paragraph('Neil Herbert U. Betacura', styles['TitleStyle']))
story.append(Paragraph('IT Professional | Web Developer | Software Developer | IT Support', styles['Body']))
story.append(Paragraph('Email: neilherbert.betacura@gmail.com | Location: Kibawe, Bukidnon, Philippines', styles['Small']))
story.append(Spacer(1, 14))
story.append(Paragraph('PROFILE', styles['SectionTitle']))
story.append(Paragraph('I am a Bachelor of Science in Information Technology student with hands-on experience in web development, software programming, and hardware troubleshooting. I enjoy creating efficient, user-friendly, and modern digital solutions that solve real problems and improve productivity.', styles['Body']))
story.append(Spacer(1, 12))
story.append(Paragraph('SKILLS', styles['SectionTitle']))
skills = ['HTML5, CSS3, JavaScript', 'Python, Flask, FastAPI', 'MySQL, SQLite, Supabase', 'Git, GitHub, VS Code', 'Responsive Web Design', 'Computer Troubleshooting & IT Support']
story.append(ListFlowable([ListItem(Paragraph(item, styles['Body'])) for item in skills], bulletType='bullet', leftIndent=18, bulletFontName='Helvetica', bulletFontSize=10, spaceBefore=4, spaceAfter=4))
story.append(Spacer(1, 12))
story.append(Paragraph('PROJECTS', styles['SectionTitle']))
projects = [
    'PharmaVend – Smart self-service vending machine for over-the-counter medicines.',
    'Student Attendance Management System – Attendance tracking and academic records system.',
    'Barangay Online System – Resident management and civic service applications.',
    'Cafe Delights POS – Sales and inventory management system for café operations.'
]
story.append(ListFlowable([ListItem(Paragraph(item, styles['Body'])) for item in projects], bulletType='bullet', leftIndent=18, bulletFontName='Helvetica', bulletFontSize=10, spaceBefore=4, spaceAfter=4))
story.append(Spacer(1, 12))
story.append(Paragraph('EDUCATION', styles['SectionTitle']))
story.append(Paragraph('Bachelor of Science in Information Technology', styles['Body']))
story.append(Paragraph('Philippine Countryville College • 2021 – Present', styles['Small']))
story.append(Spacer(1, 12))
story.append(Paragraph('EXPERIENCE', styles['SectionTitle']))
story.append(Paragraph('IT Student & Developer • Philippine Countryville College', styles['Body']))
story.append(Paragraph('Focused on web development, software projects, technology support, and system improvement initiatives.', styles['Small']))
story.append(Spacer(1, 12))
story.append(Paragraph('CERTIFICATIONS & ACHIEVEMENTS', styles['SectionTitle']))
story.append(Paragraph('• Capstone Project (PharmaVend)\n• Departmental Projects\n• Seminars and Tech Workshops\n• CCNA (Networking) Interest and Skills', styles['Body']))

doc = SimpleDocTemplate(str(out_file), pagesize=A4, rightMargin=48, leftMargin=48, topMargin=42, bottomMargin=42)
doc.build(story)
print(f'Created {out_file}')
