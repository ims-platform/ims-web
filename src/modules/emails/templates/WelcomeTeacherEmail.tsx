import * as React from 'react';

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface WelcomeTeacherEmailProps {
  teacherName?: string;
  loginEmail?: string;
  temporaryPassword?: string;
}

export const WelcomeTeacherEmail = ({
  teacherName = 'profesor/a',
  loginEmail = 'profesor.ejemplo@micolegio.edu',
  temporaryPassword = 'Academic-2024!',
}: WelcomeTeacherEmailProps) => {
  const previewText = `¡Bienvenido al equipo docente de Mi Colegio!`;

  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Preview>{previewText}</Preview>
        <Container style={styles.container}>
          <div style={styles.contentPadding}>
            {/* Header */}
            <Section style={styles.headerSection}>
              <div style={styles.logoCircle}>
                <Text style={styles.logoIcon}>🎓</Text>
              </div>
              <Text style={styles.logoText}>Mi Colegio</Text>
            </Section>

            {/* Title & Welcome Message */}
            <Heading style={styles.heading}>¡Bienvenido al equipo docente!</Heading>
            <Text style={styles.paragraph}>
              Estimado/a {teacherName}, es un gusto saludarle. Hemos habilitado su acceso a la plataforma académica donde podrá
              gestionar sus cursos y conectar con sus alumnos de forma integral.
            </Text>

            {/* Credentials Card */}
            <div style={styles.card}>
              <Text style={styles.cardTitle}>Sus credenciales de acceso</Text>

              {/* Email Row */}
              <Row style={{ marginBottom: '12px' }}>
                <Column align="left">
                  <Text style={styles.label}>Usuario</Text>
                </Column>
                <Column align="right">
                  <Text style={styles.valueBold}>{loginEmail}</Text>
                </Column>
              </Row>

              <Hr style={styles.hr} />

              {/* Password Row */}
              <Row>
                <Column align="left">
                  <Text style={styles.label}>Contraseña temporal</Text>
                </Column>
                <Column align="right">
                  <div style={styles.pill}>{temporaryPassword}</div>
                </Column>
              </Row>

              <Hr style={styles.hrSpacing} />

              {/* Security Warning */}
              <Text style={styles.warning}>
                * Se le solicitará actualizar su contraseña en el primer inicio de sesión por motivos de seguridad.
              </Text>
            </div>

            {/* Call to Action Button */}
            <Section style={styles.btnSection}>
              <Button style={styles.button} href="https://micolegio.edu/login">
                Activar mi cuenta
              </Button>
            </Section>

            <Hr style={styles.separator} />

            {/* Next Steps List */}
            <Section style={{ marginTop: '30px' }}>
              <Text style={styles.stepsTitle}>Próximos pasos</Text>

              {/* Step 1 */}
              <Row style={styles.stepRow}>
                <Column width="40" align="center" style={{ verticalAlign: 'top' }}>
                  <div style={styles.stepCircle}>
                    <Text style={styles.stepNumber}>1</Text>
                  </div>
                </Column>
                <Column align="left" style={styles.stepTextCol}>
                  <Text style={styles.stepText}>Inicie sesión con su correo institucional y la clave temporal.</Text>
                </Column>
              </Row>

              {/* Step 2 */}
              <Row style={styles.stepRow}>
                <Column width="40" align="center" style={{ verticalAlign: 'top' }}>
                  <div style={styles.stepCircle}>
                    <Text style={styles.stepNumber}>2</Text>
                  </div>
                </Column>
                <Column align="left" style={styles.stepTextCol}>
                  <Text style={styles.stepText}>Configure su perfil y revise la carga académica asignada.</Text>
                </Column>
              </Row>

              {/* Step 3 */}
              <Row>
                <Column width="40" align="center" style={{ verticalAlign: 'top' }}>
                  <div style={styles.stepCircle}>
                    <Text style={styles.stepNumber}>3</Text>
                  </div>
                </Column>
                <Column align="left" style={styles.stepTextCol}>
                  <Text style={styles.stepText}>Comience a cargar material didáctico para sus estudiantes.</Text>
                </Column>
              </Row>
            </Section>
          </div>

          {/* Footer Wrapper (Inside Main Container) */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              ¿Necesita asistencia técnica? Escríbanos a <br />
              <Link href="mailto:soporte@micolegio.edu" style={styles.footerLink}>
                soporte@micolegio.edu
              </Link>
            </Text>

            {/* Spacer for 24px gap */}
            <div style={{ height: '24px', lineHeight: '24px' }}>&nbsp;</div>

            <Text style={styles.footerCopyright}>© {new Date().getFullYear()} MI COLEGIO. TODOS LOS DERECHOS RESERVADOS.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTeacherEmail;

const styles = {
  body: {
    backgroundColor: '#f8fafc',
    margin: 'auto',
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    padding: '20px 8px',
  },
  container: {
    border: '1px solid rgba(196, 198, 208, 0.3)',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    margin: '20px auto',
    maxWidth: '560px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
  },
  contentPadding: {
    padding: '40px 48px',
  },
  headerSection: {
    textAlign: 'center' as const,
  },
  logoCircle: {
    margin: '0 auto',
    display: 'flex',
    height: '56px',
    width: '56px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px',
    backgroundColor: '#eef2ff',
    marginBottom: '16px',
  },
  logoIcon: {
    fontSize: '24px',
    margin: '0',
    lineHeight: '1',
  },
  logoText: {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '0',
    letterSpacing: '-0.025em',
  },
  heading: {
    color: '#0f172a',
    fontSize: '26px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    marginTop: '32px',
    marginBottom: '16px',
    padding: '0',
    lineHeight: '1.2',
  },
  paragraph: {
    color: '#475569',
    fontSize: '15px',
    lineHeight: '24px',
    textAlign: 'center' as const,
    marginBottom: '40px',
  },
  card: {
    backgroundColor: '#faf9f5',
    borderRadius: '12px',
    border: '1px solid #f3eee4',
    padding: '24px',
    marginBottom: '32px',
  },
  cardTitle: {
    color: '#64748b',
    fontSize: '11px',
    fontWeight: 'bold',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.15em',
    textAlign: 'center' as const,
    margin: '0 0 20px 0',
  },
  label: {
    color: '#475569',
    fontSize: '14px',
    margin: '0',
  },
  valueBold: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0',
  },
  hr: {
    borderColor: '#e2e8f0',
    margin: '16px 0',
  },
  hrSpacing: {
    borderColor: '#e2e8f0',
    margin: '20px 0',
  },
  separator: {
    borderColor: '#f1f5f9',
    margin: '40px 0 0 0',
  },
  pill: {
    display: 'inline-block',
    backgroundColor: '#eff6ff',
    color: '#3b82f6',
    fontWeight: '600',
    fontSize: '14px',
    padding: '6px 12px',
    borderRadius: '6px',
    letterSpacing: '0.025em',
  },
  warning: {
    color: '#64748b',
    fontSize: '12px',
    textAlign: 'center' as const,
    fontStyle: 'italic',
    margin: '0',
    lineHeight: '1.5',
  },
  btnSection: {
    textAlign: 'center' as const,
  },
  button: {
    backgroundColor: '#595cf4',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center' as const,
    padding: '16px',
    display: 'block',
    width: '100%',
    textDecoration: 'none',
  },
  stepsTitle: {
    color: '#0f172a',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    textAlign: 'center' as const,
    margin: '0 0 24px 0',
  },
  stepRow: {
    marginBottom: '20px',
  },
  stepCircle: {
    width: '28px',
    height: '28px',
    borderRadius: '9999px',
    backgroundColor: '#eff6ff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumber: {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: '12px',
    margin: '0',
    lineHeight: '28px',
  },
  stepTextCol: {
    paddingLeft: '16px',
    verticalAlign: 'middle',
  },
  stepText: {
    color: '#475569',
    fontSize: '14px',
    lineHeight: '20px',
    margin: '0',
  },
  footer: {
    textAlign: 'center' as const,
    paddingTop: '32px',
    paddingBottom: '32px',
    paddingLeft: '32px',
    paddingRight: '32px',
    backgroundColor: '#f1f3f9',
    borderTop: '1px solid rgba(196, 198, 208, 0.3)',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
  },
  footerText: {
    color: '#64748b',
    fontSize: '12px',
    lineHeight: '20px',
    margin: '0',
  },
  footerLink: {
    color: '#3b82f6',
    textDecoration: 'underline',
  },
  footerCopyright: {
    color: '#94a3b8',
    fontSize: '10px',
    textTransform: 'uppercase' as const,
    margin: '0',
    letterSpacing: '0.05em',
  },
};
