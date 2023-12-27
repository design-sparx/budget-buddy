import { GuestLayout } from '../layout';
import { HeroSection } from '../sections/Hero';
import { Container, Col, Row } from 'react-grid-system';
import { UpdatesCard } from '../components/UpdatesCard';

export const Home = () => {
	return (
		<GuestLayout>
			<HeroSection />
			<Container fluid>
				<Row>
					<Col lg={8}>
						<UpdatesCard />
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</GuestLayout>
	);
};
