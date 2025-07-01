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
				<View style={{ marginBottom: 8 }}>
					<Text style={styles.text}>
						안녕하세요,
						<br />
						사람들의 일상에 가치를 더하는 서비스를 만들고 싶은 개발자
						천지은입니다.
					</Text>
				</View>

				<View style={{ marginBottom: 8 }}>
					<Text style={styles.text}>
						공공기관 시스템을 개발하며 웹 개발 경험을 쌓았지만
						<br />더 많은 사람들이 매일 사용하는 서비스를 만들고 싶다는 마음에
						모바일 앱 개발에 도전하게 되었습니다.
					</Text>
				</View>

				<View style={{ marginBottom: 8 }}>
					<Text style={styles.text}>
						React Native로 두 개의 앱을 처음부터 끝까지 직접 기획하고 개발해본
						경험이 있습니다.
						<br />
						‘Indexly’는 iOS와 Android 모두 정식 출시했고, ‘모동숲 마켓’은 현재
						iOS에서 베타테스트를 진행 중입니다.
					</Text>
				</View>

				<View style={{ marginBottom: 8 }}>
					<Text style={styles.text}>
						새로운 기술을 배우고 서비스를 만들어가는 과정에서 몰입과 즐거움을
						느낍니다.
						<br />
						앞으로도 더 많은 사람들에게 가치를 전하는 서비스를 직접 만들어
						나가고 싶습니다.
					</Text>
				</View>
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
							서비스 고도화
						</Text>

						<View style={[styles.work, { marginTop: 12 }]}>
							<Text style={styles.subTitle}>지도 엔진 유지보수</Text>
							<Text style={styles.bullet}>
								• Mapbox 기반 사내 지도 서버와 MapLibre GL JS 연동,
							</Text>
							<Text style={[styles.bullet, { marginLeft: 21 }]}>
								벡터 타일·레이어·오버레이 등 GIS UI의 디버깅 및 사용자 경험
								개선을 담당했습니다.
							</Text>
							<Text style={styles.bullet}>
								• 단순 외부 지도 API 활용을 넘어, 자체 GIS 엔진 구조를 직접
								이해하고 운영하는 경험을 쌓았습니다.
							</Text>
						</View>

						<View style={styles.work}>
							<Text style={styles.subTitle}>
								작업 관리 시스템 전면 리팩토링
							</Text>
							<Text style={styles.bullet}>
								• 기존의 가상 데이터 기반 작업 관리 시스템을 직접 주도하여
								실데이터 기반 구조로 근본적으로 개편했습니다.
							</Text>
							<Text style={styles.bullet}>
								• 데이터 모델과 프론트엔드 로직을 모두 재설계하고, API
								개발자와도 긴밀하게 협업하여 필요한 엔드포인트와 기능을 신규
								정의·구현함으로써
							</Text>
							<Text style={[styles.bullet, { marginLeft: 21 }]}>
								서버 페이지네이션 및 대용량 쿼리 효율성을 크게 향상시켰습니다.
							</Text>
						</View>

						<View style={styles.work}>
							<Text style={styles.subTitle}>
								대용량 데이터 조회 차트 성능 개선
							</Text>
							<Text style={styles.bullet}>
								• ElasticSearch 집계 쿼리를 활용해 6개월 이상 대용량 센서 데이터
								조회 시
							</Text>
							<Text style={[styles.bullet, { marginLeft: 21 }]}>
								로딩 속도를 20,000ms → 1,000ms(95% 이상 단축)로 최적화했습니다.
							</Text>
						</View>

						<View style={styles.work}>
							<Text style={styles.subTitle}>서비스 배포</Text>
							<Text style={styles.bullet}>
								• Systemd 기반 서버에서는 SSH 접속 및 dist 파일 배포 후 서비스
								재시작,
							</Text>
							<Text style={[styles.bullet, { marginLeft: 21 }]}>
								Docker 환경에서는 이미지 업데이트 및 컨테이너 재시작을 통해
								정기적으로 서비스를 배포·운영했습니다.
							</Text>
						</View>

						<View style={styles.work}>
							<Text style={styles.subTitle}>업무 자동화/운영 지원</Text>
							<Text style={styles.bullet}>
								• Playwright 스크립트를 작성하여 운영팀의 분기별 보고서 작성
								시간을 80% 이상 단축했습니다.
							</Text>
							<Text style={styles.bullet}>
								• Node.js 스크립트를 작성하여 대용량 데이터 Excel 다운로드를
								자동화했습니다.
							</Text>
							<Text style={styles.bullet}>
								• Slackbot과 Cron을 활용하여 일일 자동 보고 시스템을
								구축했습니다.
							</Text>
						</View>

						<View style={styles.work}>
							<Text style={styles.subTitle}>협업 및 커뮤니케이션</Text>
							<Text style={styles.bullet}>
								• 백엔드·인프라 개발자와 기능 연동과 배포를 협업하며, 장애 대응
								및 안정적 운영을 경험했습니다.
							</Text>
							<Text style={styles.bullet}>
								• 실사용자(공무원) 대상 정기점검에 직접 참여하여 피드백을
								수렴하고, 요구사항을 반영해 기능 개선을 주도했습니다.
							</Text>
							<Text style={styles.bullet}>
								• 기획자와 신규 화면 기능을 협의하고, 디자이너의 UI 설계안에
								기반해 화면을 개발했습니다.
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
							source={require('../assets/images/animal_logo.png')}
							style={styles.image}
							resizeMode='contain'
						/>
						<View>
							<Text style={styles.title}>모동숲 마켓</Text>
							<Text style={styles.text}>솔로 프로젝트</Text>
							<Text style={styles.text}>2025.01.23 - </Text>

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
									- Firebase OpenID Connect 기반 네이버·카카오·Apple 소셜
									로그인, 회원 가입/탈퇴, 프로필 수정 등 회원 인증
								</Text>
								<Text style={styles.bullet}>
									- React Hook Form + Zod을 활용한 사용자 입력 유효성 검사
								</Text>
								<Text style={styles.bullet}>
									- 게시글·댓글 CRUD 및 Algolia 풀텍스트 검색 등 커뮤니티 기능
								</Text>
								<Text style={styles.bullet}>
									- React Query useInfiniteQuery 훅을 사용한 게시글·댓글 목록
									무한 스크롤
								</Text>
								<Text style={styles.bullet}>
									- 게시글·댓글·채팅 신고, 비속어 필터링, 유저 간 차단
								</Text>
								<Text style={styles.bullet}>
									- Firebase Realtime Database 기반 1:1 실시간 채팅 및 알림
								</Text>
								<Text style={styles.bullet}>
									- Expo Notifications + Firebase Cloud Functions을 활용한 푸시
									알림
								</Text>
							</View>

							<View style={styles.linksContainer}>
								<Link href='https://github.com/JaneChun/animal-crossing-trading-expo-app'>
									<Text style={styles.link}>
										<Feather name='link' style={styles.icon} />
										<Text>GitHub</Text>
									</Text>
								</Link>

								<Link href='https://testflight.apple.com/join/RBqVJ9GB'>
									<Text style={styles.link}>
										<Feather name='link' style={styles.icon} />
										<Text>App Store(Beta)</Text>
									</Text>
								</Link>
							</View>
						</View>
					</View>

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
										<Text>App Store</Text>
									</Text>
								</Link>

								<Link href='https://play.google.com/store/apps/details?id=com.janechun.indexly'>
									<Text style={styles.link}>
										<Feather name='link' style={styles.icon} />
										<Text>Google Play</Text>
									</Text>
								</Link>
							</View>
						</View>
					</View>
				</View>
			</View>

			<View style={[styles.section, styles.certRow]}>
				<View style={styles.certCol}>
					<Text style={[styles.sectionTitle, styles.titleWithBorder]}>
						학력
					</Text>
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

				<View style={styles.certCol}>
					<Text style={[styles.sectionTitle, styles.titleWithBorder]}>
						스터디
					</Text>
					<View style={styles.columnsContainer}>
						<Image
							source={require('../assets/images/recursive_logo.png')}
							style={styles.image}
							resizeMode='contain'
						/>
						<View>
							<Text style={styles.title}>Recursive</Text>
							<Text style={styles.text}>
								<Text style={styles.text}>2022.11 - 진행중</Text>
								<Text style={styles.divider}>|</Text>
								<Link href='https://github.com/JaneChun/algorithm'>
									<Text style={styles.link}>
										<Feather name='link' style={styles.icon} />
										<Text>GitHub</Text>
									</Text>
								</Link>
							</Text>
							<Text style={styles.text}>
								매주 알고리즘 문제를 풀고 디스코드에서 풀이를 공유하는 스터디
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
		marginBottom: 50,
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
		fontWeight: 600,
	},
	work: {
		marginBottom: 12,
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
		marginRight: 2,
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
