package humanBody;

public class Simulator {
        public static void main(String args[])
        {
            Male men = new Male();
            System.out.println("Male Body:");
            performDigestion(men);
            
            Female women = new Female();
            System.out.println("Female Body:");
            performDigestion(women);

        }

        public static void performDigestion(HumanDigestion human)
        {
            human.mouth();
            human.esophagus();
            human.stomach();
            human.smallIntestine();
            human.largeIntestine();
            human.anus();
        }
}
