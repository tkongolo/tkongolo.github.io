
import { useTranslation } from 'react-i18next'
import MainLayout from "../components/layouts/main.layout.tsx";
import HeaderLayout from "../components/layouts/header.layout.tsx";
import FooterLayout from "../components/layouts/footer.layout.tsx";

export function HomeRoute() {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <HeaderLayout>
        <></>
      </HeaderLayout>
      <FooterLayout>
        <></>
      </FooterLayout>
    </MainLayout>
  )
}
