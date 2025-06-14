import { Colors } from '@/constants/Colors';
import {
	AntDesign,
	Entypo,
	Feather,
	Ionicons,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from './ui/Link';

const colors = Colors.light;

// 'https://github.com/JaneChun'
// 'https://janechun.tistory.com'
// 'https://velog.io/@wlwl99'

export default function Resume() {
	return (
		<ScrollView
			contentContainerStyle={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<Text style={styles.name}>천지은</Text>

			<View
				style={[
					styles.section,
					{ flexDirection: 'row', justifyContent: 'space-between' },
				]}
			>
				<View style={styles.contact}>
					<Text style={styles.contactRow}>
						<MaterialCommunityIcons
							name='cellphone'
							color={colors.icon}
							style={styles.icon}
						/>
						<Text>+821028337073</Text>
					</Text>
					<Text style={styles.contactRow}>
						<Entypo name='email' color={colors.icon} style={styles.icon} />
						<Text>janechun22@gmail.com</Text>
					</Text>
				</View>

				<View style={styles.contact}>
					<Link href='http://janechun-portfolio.s3-website.ap-northeast-2.amazonaws.com/'>
						<Text style={styles.link}>
							<Feather name='link' style={styles.icon} />
							<Text>포트폴리오</Text>
						</Text>
					</Link>

					<Link href='https://github.com/JaneChun'>
						<Text style={styles.link}>
							<Feather name='link' style={styles.icon} />
							<Text>GitHub</Text>
						</Text>
					</Link>

					<Link href='https://janechun.tistory.com'>
						<Text style={styles.link}>
							<Feather name='link' style={styles.icon} />
							<Text>Tistory</Text>
						</Text>
					</Link>
				</View>
			</View>

			<View style={styles.section}>
				<Text style={styles.text}>
					안녕하세요, 사람들의 일상에 가치를 더하는 서비스를 만들고 싶은 개발자
					천지은입니다.
				</Text>
				<Text style={styles.text}>
					공공기관 시스템을 개발하며 웹 개발 경험을 쌓았으나
				</Text>
				<Text style={styles.text}>
					사용자 수가 제한적이고 사용자와의 상호작용 중심의 개발과는 거리가 있어
					늘 아쉬움이 있었습니다.
				</Text>
				<Text style={styles.text}>
					더 많은 사람들의 일상 속에 스며드는 앱을 만들고 싶다는 마음으로,
					모바일 개발로 전향하게 되었습니다.
				</Text>
				<Text style={styles.text}>
					현재는 React Native로 모바일 앱을 직접 기획하고 개발하며, 일상을 더
					편리하게 만드는 앱을 구현해나가고 있습니다.
				</Text>
			</View>

			<View style={styles.section}>
				<View style={styles.careerRow}>
					<Text style={[styles.sectionTitle, { marginBottom: 0 }]}>
						경력
						<Text style={styles.period}>1년 2개월</Text>
					</Text>
				</View>

				<View style={styles.columnsContainer}>
					<Link href='https://www.gractor.com/'>
						<Image
							source={require('../assets/images/gractor_logo.jpg')}
							style={styles.image}
							resizeMode='contain'
						/>
					</Link>
					<View>
						<Text style={styles.title}>그렉터</Text>
						<Text style={styles.text}>
							<Text style={styles.text}>기업부설연구소</Text>
							<Text style={styles.divider}>|</Text>
							<Text style={styles.text}>연구원</Text>
						</Text>
						<Text style={styles.text}>2023.09 - 2024.10 (1년 2개월)</Text>

						<Text style={styles.text}>
							공공기관 대상 IoT 기반 시설관리 시스템의 프론트엔드 유지보수 및
							기능 고도화
						</Text>

						<View style={[styles.work, { marginTop: 12 }]}>
							<Text style={styles.subTitle}>프론트엔드 개발</Text>
							<Text style={styles.bullet}>
								• 지도 기능: MapTiler 및 MapLibre 기반 지도 기능 고도화 및
								유지보수
							</Text>
							<Text style={styles.bullet}>
								• 조건부 필터 및 그리드 UI: 복합 조건 검색 구현 및 리팩토링으로
								검색 편의성·조회 속도 개선
							</Text>
							<Text style={styles.bullet}>
								• 데이터 시각화: Apache ECharts를 활용한 센서 데이터 그래프 및
								차트 구현
							</Text>
							<Text style={styles.bullet}>
								• 일정 관리 UI 개선: FullCalendar 기반 센서 유지보수 관리 기능
								개선 , 코드 및 데이터 구조 리팩토링으로 성능 최적화
							</Text>
							<Text style={styles.bullet}>
								• 쿼리 최적화: ElasticSearch 집계 쿼리로 복수 API 호출 통합,
								장기간 조회 시 페이지 로딩 속도 기존 대비 3배 이상 향상
							</Text>
						</View>

						<View style={styles.work}>
							<Text style={styles.subTitle}>서비스 배포 및 운영 자동화</Text>
							<Text style={styles.bullet}>
								• System daemon / Docker 환경에서 정기적 서비스 배포 및 운영
								관리
							</Text>
							<Text style={styles.bullet}>
								• Playwright 기반 자동 스크린샷 툴 개발로 분기별 보고서 작성
								시간 약 80% 단축
							</Text>
							<Text style={styles.bullet}>
								• Node.js로 Excel 자동 다운로드 스크립트 작성, 반복 업무
								자동화로 업무 효율성 향상
							</Text>
							<Text style={styles.bullet}>
								• Slackbot + Cron을 활용한 일일 Slack 자동 보고 시스템 구축
							</Text>
						</View>

						<View style={styles.work}>
							<Text style={styles.subTitle}>협업 및 커뮤니케이션</Text>
							<Text style={styles.bullet}>
								• 백엔드·인프라 개발자와의 기능 연동 및 버전 대응 협업, 안정적인
								배포 환경 유지
							</Text>
							<Text style={styles.bullet}>
								• 기획자와 신규 버전 기능 협의, 디자이너 UI 설계안에 기반한 화면
								개발
							</Text>
							<Text style={styles.bullet}>
								• 실사용자(공무원) 대상 정기점검에 참여해 직접 피드백 수렴 및
								요구사항 반영하여 기능 개선 주도
							</Text>
						</View>

						<View style={[styles.work, { marginBottom: 0 }]}>
							<Text style={styles.subTitle}>기술 스택</Text>
							<Text style={styles.bullet}>
								• Frontend: Vue.js, Sass, Bootstrap, Apache ECharts,
								FullCalendar, MapLibre, Carbone, pdfmake
							</Text>
							<Text style={styles.bullet}>
								• Backend/Infra: Linux, Node.js, ElasticSearch
							</Text>
							<Text style={styles.bullet}>
								• Tool: Git, Slack, Playwright, Postman, Figma
							</Text>
						</View>
					</View>
				</View>
			</View>

			<View style={[styles.section, styles.certRow]}>
				<View style={styles.certCol}>
					<Text style={[styles.sectionTitle, styles.titleWithBorder]}>
						자격증
					</Text>
					<View style={styles.columnsContainer}>
						<View style={styles.iconContainer}>
							<AntDesign name='filetext1' size={16} />
						</View>

						<View style={styles.certItem}>
							<Text style={styles.certTitle}>SQLD</Text>
							<Text style={styles.text}>2025.04.04</Text>
						</View>
					</View>

					<View style={styles.columnsContainer}>
						<View style={styles.iconContainer}>
							<AntDesign name='filetext1' size={16} />
						</View>

						<View style={styles.certItem}>
							<View style={styles.certTitle}>
								<Text>AWS Certified Solutions Architect</Text>
								<Text>- Associate</Text>
							</View>
							<Text style={styles.text}>2024.12.27</Text>
						</View>
					</View>

					<View style={styles.columnsContainer}>
						<View style={styles.iconContainer}>
							<AntDesign name='filetext1' size={16} />
						</View>

						<View style={styles.certItem}>
							<Text style={styles.certTitle}>정보처리기사</Text>
							<Text style={styles.text}>2024.06.18</Text>
						</View>
					</View>
				</View>

				<View style={[styles.section, styles.certCol]}>
					<Text style={[styles.sectionTitle, styles.titleWithBorder]}>
						외국어
					</Text>

					<View style={styles.columnsContainer}>
						<View style={styles.iconContainer}>
							<Ionicons name='earth-outline' size={16} />
						</View>

						<View style={styles.certItem}>
							<Text style={styles.certTitle}>OPIC IH</Text>
							<Text style={styles.text}>2022.03.30</Text>
						</View>
					</View>

					<View style={styles.columnsContainer}>
						<View style={styles.iconContainer}>
							<Ionicons name='earth-outline' size={16} />
						</View>

						<View style={styles.certItem}>
							<Text style={styles.certTitle}>TOEIC 965</Text>
							<Text style={styles.text}>2020.10.25</Text>
						</View>
					</View>
				</View>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>학력</Text>
				<View style={{ gap: 16 }}>
					<View style={styles.columnsContainer}>
						<Image
							source={require('../assets/images/university_logo.svg')}
							style={styles.image}
							resizeMode='contain'
						/>

						<View>
							<Text style={styles.title}>한양대학교</Text>
							<Text style={styles.text}>
								<Text style={styles.text}>2017.03 - 2022.08</Text>
								<Text style={styles.divider}>|</Text>
								<Text style={styles.text}>영미언어문화학과</Text>
								<Text style={styles.divider}>|</Text>
								<Text style={styles.text}>3.8 / 4.5</Text>
							</Text>
						</View>
					</View>

					<View style={styles.columnsContainer}>
						<Image
							source={require('../assets/images/bootcamp_logo.jpg')}
							style={styles.image}
							resizeMode='contain'
						/>
						<View>
							<Text style={styles.title}>코드스테이츠</Text>
							<Text style={styles.text}>
								<Text style={styles.text}>2022.08 - 2023.02</Text>
								<Text style={styles.divider}>|</Text>
								<Text style={styles.text}>프론트엔드 부트캠프 41기</Text>
							</Text>
						</View>
					</View>
				</View>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>스킬</Text>
				<View style={styles.skillContainer}>
					{[
						'TypeScript',
						'React Native',
						'Expo',
						'React',
						'Vue.js',
						'Redux',
						'Zustand',
						'React Query',
						'Linux',
						'Node.js',
						'Elasticsearch',
						'Firebase',
						'AWS',
						'Postman',
						'Git',
						'Figma',
					].map((name, i) => (
						<Text key={i} style={styles.chip}>
							{name}
						</Text>
					))}
				</View>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>프로젝트</Text>
				<View style={{ gap: 48 }}>
					<View style={styles.columnsContainer}>
						<Image
							source={require('../assets/images/indexly_logo.png')}
							style={styles.image}
							resizeMode='contain'
						/>
						<View>
							<Text style={styles.title}>indexly</Text>
							<Text style={styles.text}>솔로 프로젝트</Text>
							<Text style={styles.text}>2025.01.15 - 2025.01.21</Text>

							<Text style={styles.text}>인덱스로 관리하는 투두 관리 앱</Text>

							<View style={[styles.work, { marginTop: 12 }]}>
								<Text style={styles.subTitle}>기술 스택</Text>
								<Text style={styles.text}>
									React Native, Expo, Expo SQLite, EAS Build
								</Text>
							</View>

							<View style={[styles.work, { marginBottom: 8 }]}>
								<Text style={styles.subTitle}>주요 기능</Text>
								<Text style={styles.bullet}>
									- Expo SQLite를 활용한 투두 데이터의 로컬 저장 및 오프라인
									환경 지원
								</Text>
								<Text style={styles.bullet}>
									- 외부 라이브러리 없이 FlatList 간 커스텀 드래그 앤 드롭 기능
									직접 구현
								</Text>
							</View>

							<View style={styles.linksContainer}>
								<Link href='https://github.com/JaneChun/indexly'>
									<Text style={styles.link}>
										<Feather name='link' style={styles.icon} />
										<Text>GitHub</Text>
									</Text>
								</Link>

								<Link href='https://apps.apple.com/us/app/indexly-%EC%9D%B8%EB%8D%B1%EC%8A%A4%EB%A1%9C-%EC%A0%95%EB%A6%AC%ED%95%98%EB%8A%94-%ED%95%A0-%EC%9D%BC-%EA%B4%80%EB%A6%AC/id6740793736'>
									<Text style={styles.link}>
										<Feather name='link' style={styles.icon} />
										<Text>AppStore</Text>
									</Text>
								</Link>
							</View>
						</View>
					</View>

					<View style={styles.columnsContainer}>
						<Image
							source={require('../assets/images/animal_logo.png')}
							style={styles.image}
							resizeMode='contain'
						/>
						<View>
							<Text style={styles.title}>모동숲 마켓</Text>
							<Text style={styles.text}>솔로 프로젝트</Text>
							<Text style={styles.text}>2025.01.23 -</Text>

							<Text style={styles.text}>
								닌텐도 게임 “모여봐요 동물의 숲” 아이템 거래 앱
							</Text>

							<View style={[styles.work, { marginTop: 12 }]}>
								<Text style={styles.subTitle}>기술 스택</Text>
								<Text style={styles.text}>
									TypeScript, React Native, Expo, Zustand, React Query, React
									Hook Form, Zod, React Navigation,
								</Text>
								<Text style={styles.text}>Firebase, EAS Build</Text>
							</View>

							<View style={[styles.work, { marginBottom: 8 }]}>
								<Text style={styles.subTitle}>주요 기능</Text>
								<Text style={styles.bullet}>
									- Firebase OpenID Connect 기반 네이버·카카오 OAuth 로그인,
									회원 가입/탈퇴, 프로필 수정 등 회원 인증 기능 구현
								</Text>
								<Text style={styles.bullet}>
									- React Hook Form + Zod를 활용한 사용자 입력 유효성 검사 적용
								</Text>
								<Text style={styles.bullet}>
									- 게시글·댓글 작성, 수정, 삭제 및 키워드 검색 기능 등 커뮤니티
									기능 구현
								</Text>
								<Text style={styles.bullet}>
									- React Query useInfiniteQuery 훅을 사용하여 게시글·댓글 목록
									무한 스크롤 구현
								</Text>
								<Text style={styles.bullet}>
									- Firebase Realtime Database 기반 1:1 실시간 채팅 및 알림 기능
									구현
								</Text>
								<Text style={styles.bullet}>
									- Expo Notifications + Firebase Cloud Functions를 활용한 푸시
									알림 기능 구현
								</Text>
							</View>

							<View style={styles.linksContainer}>
								<Link href='https://github.com/JaneChun/animal-crossing-trading-expo-app'>
									<Text style={styles.link}>
										<Feather name='link' style={styles.icon} />
										<Text>GitHub</Text>
									</Text>
								</Link>
							</View>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 50,
		backgroundColor: '#fff',
	},
	name: {
		fontSize: 28,
		fontWeight: 600,
		marginBottom: 12,
	},
	section: {
		marginBottom: 60,
	},
	contact: {
		flexDirection: 'row',
		gap: 16,
	},
	contactRow: {
		fontSize: 14,
		color: colors.gray,
		flexDirection: 'row',
		alignItems: 'center',
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 600,
		marginBottom: 16,
	},
	careerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 16,
	},
	period: {
		color: colors.gray,
		fontSize: 14,
		fontWeight: 400,
		marginLeft: 8,
	},
	text: {
		fontSize: 14,
		marginBottom: 4,
	},
	columnsContainer: {
		flexDirection: 'row',
		gap: 16,
	},
	title: {
		fontSize: 16,
		fontWeight: 600,
		marginBottom: 4,
	},
	subTitle: {
		fontWeight: 500,
	},
	work: {
		marginBottom: 20,
	},
	bullet: {
		marginLeft: 12,
		fontSize: 14,
		lineHeight: 20,
	},
	link: {
		color: '#0687f0',
	},
	linksContainer: {
		flexDirection: 'row',
		gap: 8,
	},
	image: {
		width: 30,
		height: 30,
	},
	icon: {
		marginRight: 4,
	},
	divider: {
		color: colors.icon,
		paddingHorizontal: 8,
	},
	skillContainer: {
		flexDirection: 'row',
		gap: 8,
		flexWrap: 'wrap',
	},
	chip: {
		borderWidth: 1,
		paddingVertical: 6,
		paddingHorizontal: 8,
		borderColor: colors.border,
		borderRadius: 8,
	},
	certRow: {
		flexDirection: 'row',
		gap: 32,
	},
	certCol: {
		flex: 1,
	},
	titleWithBorder: {
		paddingBottom: 8,
		borderBottomWidth: 1,
		borderColor: colors.border,
	},
	iconContainer: {
		width: 30,
		height: 30,
		backgroundColor: colors.surface,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	certItem: {
		marginBottom: 16,
	},
	certTitle: {
		fontSize: 14,
		marginBottom: 6,
	},
});
